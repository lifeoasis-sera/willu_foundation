import {Platform} from 'react-native';
import {check, PERMISSIONS, request} from 'react-native-permissions';

export enum PERMISSION_EXCEPTION {
  BLOCKED = 'blocked',
  DENIED = 'denied',
  CANCELED = 'canceled',
}

class PermissionRepo {
  async requestGalleryPermission() {
    // ios 에러와 android 에러가 다름
    const permission = Platform.select({
      ios: PERMISSIONS.IOS.PHOTO_LIBRARY,
      default: PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
    });

    /** blocked : 권한 사용 불가
     * unavailable : 권한 거부
     * denied : 권한 거부 추가 요청 가능
     * limited : 권한 일부 제한 허용
     * granted : 권한 모두 허용 */

    const checkState = await check(permission);
    switch (checkState) {
      case 'limited':
      case 'granted':
        return true;
      case 'denied':
        break;
      default:
        throw PERMISSION_EXCEPTION.BLOCKED;
    }

    const requestState = await request(permission);
    switch (requestState) {
      case 'limited':
      case 'granted':
        return true;
      default:
        throw PERMISSION_EXCEPTION.DENIED;
    }
  }
}
export default PermissionRepo;

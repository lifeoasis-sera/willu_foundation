import ImagePicker from 'react-native-image-crop-picker';
import {PermissionRepo} from '../repo';

export enum GALLERY_EXCEPTION {
  OVER_SIZE = 'overSize',
  BLOCKED = 'blocked',
  DENIED = 'denied',
  CANCELED = 'canceled',
}

class GalleryService {
  private readonly permissionRepo: PermissionRepo;

  constructor(permissionRepo: PermissionRepo) {
    this.permissionRepo = permissionRepo;
  }

  async getSelfie() {
    try {
      const permission = await this.permissionRepo.requestGalleryPermission();
      if (permission) {
        const {path, size} = await ImagePicker.openPicker({
          cropping: true,
          width: 1350,
          height: 1350,
          compressImageMaxHeight: 1350,
          compressImageMaxWidth: 1350,
          mediaType: 'photo',
        });
        const maxSize = 5 * 1024 * 1024;

        if (size > maxSize) {
          throw GALLERY_EXCEPTION.OVER_SIZE;
        }
        return path;
      }
    } catch (e) {
      if (e.code === 'E_NO_LIBRARY_PERMISSION') {
        throw GALLERY_EXCEPTION.BLOCKED;
      } else if (e.code === 'E_PICKER_CANCELLED') {
        throw GALLERY_EXCEPTION.CANCELED;
      } else {
        throw e;
      }
    }
  }
}

export default GalleryService;

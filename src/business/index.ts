import {GalleryService} from './service';
import {PermissionRepo} from './repo';

const service = {
  gallery: new GalleryService(new PermissionRepo()),
};

export {service};

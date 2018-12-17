import girderClient from '@openchemistry/girder-client';

export function fetch(parentId, parentType, name) {

  return girderClient().get('folder', {
    params: {
      parentId,
      parentType,
      name,
    }
  })
  .then(response => response.data )
}

export function create(parentId, parentType, name, reuseExisting=true) {
  return girderClient().post('folder', {}, {
    params: {
      parentId,
      parentType,
      name,
      reuseExisting,
    }
  })
  .then(response => response.data )
}
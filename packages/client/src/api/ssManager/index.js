import instance from './instance';
import { convertRESTAPI } from '../util';

/** 用户更新 */
function users_id_patch(opts) {
  return instance({
    method: 'patch',
    url: convertRESTAPI('/users/{id}', opts),
    opts: opts
  });
}

/** 用户删除 */
function users_id_delete(opts) {
  return instance({
    method: 'delete',
    url: convertRESTAPI('/users/{id}', opts),
    opts: opts
  });
}

/** 用户查询-单个用户明细 */
function users_id_get(opts) {
  return instance({
    method: 'get',
    url: convertRESTAPI('/users/{id}', opts),
    opts: opts
  });
}

/** 用户查询-列表 */
function users_get(opts) {
  return instance({
    method: 'get',
    url:  '/users',
    opts: opts
  });
}

/** 新增用户 */
function users_post(opts) {
  return instance({
    method: 'post',
    url:  '/users',
    opts: opts
  });
}

export {
  users_id_patch,
  users_id_delete,
  users_id_get,
  users_get,
  users_post
};

import request from "@/requtest/basic";
import qs from "qs";

// 登陆接口
export function login(data) {
    return request({
        url: "/api/system/login/",
        method: "post",
        data: (data),
    });
}

//修改密码 editPwd
export function editPwd(data) {
    return request({
        url: "/editPwd",
        method: "post",
        data: qs.stringify(data),
    });
}

//删除聊天室-用户注销登录时调用
export function removeRoom(data) {
    return request({
        url: "/specificAreaData/removeRoom",
        method: "post",
        data: qs.stringify(data),
    });
}

//获取权限菜单
export function getMenu(data) {
    return request({
        url: "/api/system/permit/?role_id=" + data,
        method: "get",
        // data: qs.stringify(data),
    });
}

//用户列表
export function getUsers(data) {
    return request({
        url: "/api/system/user/",
        method: "get",
        params: data,
    });
}

//用户添加或者更新
// 当前传值为 userid
export function addUsers(data, type, userid) {
    console.log(type, '欧蓝德')
    if (type == 'add') {
        return request({
            url: "/api/system/user/",
            method: 'post',
            data: data,
        });
    }
    if (type == 'edit') {
        return request({
            url: "/api/system/user/" + userid + '/',
            method: 'put',
            data: data,
        });
    }
    if (type == 'delete') {
        return request({
            url: "/api/system/user/" + userid + '/',
            method: 'delete',
            data: data,
        });
    }
}

//用户添加或者更新
export function addUsers2(data) {
    return request({
        url: "/api/system/user/" + data + '/',
        method: 'PATCH',
        // data: data,
    });
}

//角色列表
export function getRole(data) {
    return request({
        url: "/api/system/role/",
        method: "get",
        params: data,
    });
}

//角色新增，禁用等
export function addRole(data, type) {
    console.log(type, '欧蓝德角色')
    if (type == 'add') {
        return request({
            url: "/api/system/role/",
            method: "post",
            data: data,
        });
    }
    if (type == 'edit') {
        return request({
            url: "/api/system/role/" + data.id + '/',
            method: "put",
            data: data,
        });
    }
    if (type == 'delete') {
        return request({
            url: "/api/system/role/" + data.id + '/',
            method: "delete",
            data: data,
        });
    }

}

// 启用角色
export function addRole2(data) {
    return request({
        url: "/api/system/role/" + data + '/',
        method: "PATCH",
        // data: data,
    });
}


// /api/system/permit  授权列表
export function getOrder(data) {
    return request({
        url: "/api/system/permit/?role_id=" + data.id,
        method: "get",
        // params: data,
    });
}

// api/system/lexicon/  词库管理
export function getLexicon(data) {
    return request({
        url: "/api/system/lexicon/",
        method: "get",
        params: data,
    });
}


// api/system/lexicon/  词库对比
export function getLexiconShai(data) {
    return request({
        url: "/api/system/lexicon/" + data + "/",
        method: "get",
        // params: data,
    });
}


// api/system/lexicon/  词库管理全量
export function getLexiconAll(data) {
    return request({
        url: "/api/system/lexicon/?page=-1",
        method: "get",
        // params: data,
    });
}

// api/system/lexicon/  词库删除
export function getLexicon2(data) {
    return request({
        url: "/api/system/lexicon/" + data + "/",
        method: "DELETE",
        // params: data,
    });
}

// api/system/lexicon/  词库更新
export function getLexicon3(data) {
    return request({
        url: "/api/system/lexicon/" + data + "/",
        method: "PATCH",
        // params: data,
    });
}


// api/system/lexicon/  词库更新2
export function getLexicon4(data, data2) {
    return request({
        url: "/api/system/lexicon/" + data + "/",
        method: "put",
        data: data2,
    });
}

// /api/system/permit  授权列表

// /api/system/permit/  授权
// 模块id   mod_id   角色id  role_id  行为 action 0 取消授权  1授权
export function permit(data) {
    return request({
        url: 'api/system/permit/',
        method: 'post',
        data: (data),
    });
}

// 获取模块数据
export function getModule(data) {
    return request({
        url: "/api/system/module/",
        method: "get",
        params: data,
    });
}

// 禁用/启用模块数据
export function revokedModule(moduleId, value) {
    let method = value === 1 ? "delete" : "patch"
    return request({
        url: "/api/system/module/" + moduleId + "/",
        method: method,
    });
}

// 添加/编辑模块
export function createEditModule(moduleId, data) {
    console.log(moduleId, data)
    if (moduleId) {
        return request({
            url: "/api/system/module/" + moduleId + "/",
            method: "put",
            params: data,
        });
    } else {
        return request({
            url: "/api/system/module/",
            method: "post",
            params: data,
        });
    }
}


// /api/system/register/  注册

export function setRegister(data) {
    return request({
        url: '/api/system/register/',
        method: 'post',
        data: (data),
    });
}
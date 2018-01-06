import axios from 'axios';

let base = '';

export const requestLogin = params => { return axios.post(`${base}/login`, params).then(res => res.data); };

export const getUserList = params => { return axios.get(`${base}/user/list`, { params: params }); };

export const getUserListPage = params => { return axios.get(`${base}/user/listpage`, { params: params }); };

export const removeUser = params => { return axios.get(`${base}/user/remove`, { params: params }); };

export const batchRemoveUser = params => { return axios.get(`${base}/user/batchremove`, { params: params }); };

export const editUser = params => { return axios.get(`${base}/user/edit`, { params: params }); };

export const addUser = params => { return axios.get(`${base}/user/add`, { params: params }); };

export const testData = params => { return axios.get('http://api.github.com', { params: params }); };

// 测试api
export const testApi = params => { return axios.post(`${base}/test`, params ); };

/*
* 试题 start
* */
//
export const getQueList = params => { return axios.get(`${base}/question/list`, params ); };

// 科目列表
export const getSubjectList = params => { return axios.get(`${base}/subject/list`, params ); };

// tag
export const getTagList = params => { return axios.get(`${base}/tag/list`, params ); };

// course
export const getCourseList = params => { return axios.get(`${base}/course/list`, params ); };

// chapter
export const getChapterList = params => { return axios.get(`${base}/chapter/list`, params ); };

// department
export const getDepartmentList = params => { return axios.get(`${base}/department/list`, params ); };

/*
*  设置 start
* */
// log
export const getSetLogList = params => { return axios.get(`${base}/log/list`, params ); };

// alert
export const getSetAlertList = params => { return axios.get(`${base}/alert/list`, params ); };

// chart
export const getSetChartList = params => { return axios.get(`${base}/chart/list`, params ); };

/*
* 试卷 start
* */
export const getPaperList = params => { return axios.post(`${base}/paper/list`, params ); };
//试卷详情
export const getPaperDetail = params => { return axios.post(`${base}/paper/detail`, params ); };

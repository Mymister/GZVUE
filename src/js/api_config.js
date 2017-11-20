const domain='http://vue.studyit.io/api';

export default{

//    获取轮播的接口
    getLunbo:`${domain}/getlunbo`,
    // 新闻接口
    getNL:`${domain}/getnewslist`,
    getND:`${domain}/getnew/`,

    // 图片接口
    getPC:`${domain}/getimgcategory/`,
    getPL:`${domain}/getimages/`, // 该接口后面需要一个分类id: /getimages/:id
    getPD:`${domain}/getimageinfo/` , // 该接口后面需要一个图片id: /getimageinfo/:id
    getPT: `${domain}/getthumimages/`,  // 该接口后面需要一个图片id: /getthumimages/:id

    
    // 商品接口

    // 评论接口
}
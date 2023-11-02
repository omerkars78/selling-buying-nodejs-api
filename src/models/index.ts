import sequelize from '../config/database';
import UserModel from './User';
import ProductModel from './Product';
import MessageModel from './Message';
import LikeModel from './Like';
import CommentModel from './Comment';
import PaymentModel from './Payment';
import GenderModel from './Gender'
import InvoiceModel from './Invoice';
import PaymentCardModel from './PaymentCard';
import BlockModel from './Block';
import ReportModel from './Report';
import UserProductModel from './UserProduct';
import CommentProductModel from './CommentProduct';
import CommentUserModel from './CommentUser';
import CommentBlogModel from './CommentBlog';
import ProductCategoryModel from './ProductCategory';
import ReportCategoryModel from './ReportCategory'; 
import BlogModel from './Blog';
import BlogCategoryModel from './BlogCategory';
import LikeBlogModel from './LikeBlog';
import LikeProductModel from './LikeProduct';
import FollowUserModel from './FollowUser';
import UserTypeModel from './UserType';
// Models Initialization
const initializeModels = () => {
     // Step 1: No dependencies
     GenderModel.initialize(sequelize);
     ProductCategoryModel.initialize(sequelize);
     BlogCategoryModel.initialize(sequelize);
     ReportCategoryModel.initialize(sequelize);
     UserTypeModel.initialize(sequelize);
     
     // Step 2: Depends on previous models
     UserModel.initialize(sequelize);
     ProductModel.initialize(sequelize);
     BlogModel.initialize(sequelize);
 
     // Step 3: Depends on UserModel and ProductModel
     MessageModel.initialize(sequelize);
     LikeModel.initialize(sequelize);
     CommentModel.initialize(sequelize);
     PaymentModel.initialize(sequelize);
     InvoiceModel.initialize(sequelize);
     PaymentCardModel.initialize(sequelize);
     BlockModel.initialize(sequelize);
     ReportModel.initialize(sequelize);
 
     // Step 4: Through tables
     UserProductModel.initialize(sequelize);
     CommentUserModel.initialize(sequelize);
     CommentBlogModel.initialize(sequelize);
     CommentProductModel.initialize(sequelize);
     LikeBlogModel.initialize(sequelize);
     LikeProductModel.initialize(sequelize);
     FollowUserModel.initialize(sequelize);
}

// Relations Setup
const setupRelations = () => {
  

    UserModel.hasMany(MessageModel, { foreignKey: 'senderId' });
    MessageModel.belongsTo(UserModel, { foreignKey: 'senderId' });

    UserModel.hasMany(LikeModel, { foreignKey: 'userId' });
    LikeModel.belongsTo(UserModel, { foreignKey: 'userId' });

    ProductModel.hasMany(LikeModel, { foreignKey: 'productId' });
    LikeModel.belongsTo(ProductModel, { foreignKey: 'productId' });

    UserModel.hasMany(CommentModel, { foreignKey: 'userId' });
    CommentModel.belongsTo(UserModel, { foreignKey: 'userId' });

    UserModel.belongsTo(GenderModel, { foreignKey: 'genderId' });
    GenderModel.hasMany(UserModel, { foreignKey: 'genderId' });

    UserModel.belongsTo(UserTypeModel, { foreignKey: 'userType' });
    UserTypeModel.hasMany(UserModel, { foreignKey: 'userType' });
    

    ProductModel.belongsTo(ProductCategoryModel, { foreignKey: 'productCategoryId' });
    ProductCategoryModel.hasMany(ProductModel, { foreignKey: 'productCategoryId' });
    
    UserModel.hasMany(PaymentModel, { foreignKey: 'userId' });
    PaymentModel.belongsTo(UserModel, { foreignKey: 'userId' });

    ProductModel.hasMany(PaymentModel, { foreignKey: 'productId' });
    PaymentModel.belongsTo(ProductModel, { foreignKey: 'productId' });

    UserModel.hasMany(InvoiceModel, { foreignKey: 'userId' });
    InvoiceModel.belongsTo(UserModel, { foreignKey: 'userId' });

    PaymentModel.hasOne(InvoiceModel, { foreignKey: 'paymentId' });
    InvoiceModel.belongsTo(PaymentModel, { foreignKey: 'paymentId' });

    UserModel.hasMany(PaymentCardModel, { foreignKey: 'userId' });
    PaymentCardModel.belongsTo(UserModel, { foreignKey: 'userId' });

    UserModel.hasMany(BlockModel, { foreignKey: 'blockerId' });
    UserModel.hasMany(BlockModel, { foreignKey: 'blockedId' });
    
    BlockModel.belongsTo(UserModel, { foreignKey: 'blockerId' });
    BlockModel.belongsTo(UserModel, { foreignKey: 'blockedId' });

    UserModel.hasMany(ReportModel, { foreignKey: 'reporterId' });
    UserModel.hasMany(ReportModel, { foreignKey: 'reportedId' });
    
    ReportModel.belongsTo(UserModel, { foreignKey: 'reporterId' });
    ReportModel.belongsTo(UserModel, { foreignKey: 'reportedId' });
    
    UserModel.hasMany(BlogModel, { foreignKey: 'userId' });
    BlogModel.belongsTo(UserModel, { foreignKey: 'userId' });
    
    BlogCategoryModel.hasMany(BlogModel, { foreignKey: 'blogCategoryId' });
    BlogModel.belongsTo(BlogCategoryModel, { foreignKey: 'blogCategoryId' });
   
    ReportCategoryModel.hasMany(ReportModel, { foreignKey: 'reportCategoryId' });
    ReportModel.belongsTo(ReportCategoryModel, { foreignKey: 'reportCategoryId' });

    UserModel.belongsToMany(ProductModel, { through: UserProductModel, foreignKey: 'userId' });
    ProductModel.belongsToMany(UserModel, { through: UserProductModel, foreignKey: 'productId' });

    UserModel.belongsToMany(CommentModel, { through: CommentUserModel, foreignKey: 'userId' });
    CommentModel.belongsToMany(UserModel, { through: CommentUserModel, foreignKey: 'commentId' });
    
    BlogModel.belongsToMany(CommentModel, { through: CommentBlogModel, foreignKey: 'blogId' });
    CommentModel.belongsToMany(BlogModel, { through: CommentBlogModel, foreignKey: 'commentId' });

    CommentModel.belongsToMany(ProductModel, { through: CommentProductModel, foreignKey: 'commentId' });
    ProductModel.belongsToMany(CommentModel, { through: CommentProductModel, foreignKey: 'productId' });

    LikeModel.belongsToMany(ProductModel, { through: LikeProductModel, foreignKey: 'likeId' });
    ProductModel.belongsToMany(LikeModel, { through: LikeProductModel, foreignKey: 'productId' });

    LikeModel.belongsToMany(BlogModel, { through: LikeBlogModel, foreignKey: 'likeId' });
    BlogModel.belongsToMany(LikeModel, { through: LikeBlogModel, foreignKey: 'blogId' });
    UserModel.belongsToMany(UserModel, { 
        through: FollowUserModel, 
        foreignKey: 'followerId',
        as: 'Followers' 
    });
    UserModel.belongsToMany(UserModel, { 
        through: FollowUserModel, 
        foreignKey: 'followedId',
        as: 'Following' 
    });
}

// Initialize and Setup
initializeModels();
setupRelations();

export {
    GenderModel as Gender,
    UserModel as User,
    ProductModel as Product,
    MessageModel as Message,
    LikeModel as Like,
    CommentModel as Comment,
    PaymentModel as Payment,
    InvoiceModel as Invoice,
    PaymentCardModel as PaymentCard,
    BlockModel as Block,
    ReportModel as Report,
    UserProductModel as UserProduct,
    CommentProductModel as CommentProduct,
    CommentUserModel as UserComment,
    ProductCategoryModel as ProductCategory,
    BlogModel as Blog,
    BlogCategoryModel as BlogCategory,
    CommentBlogModel as CommentBlog,
    LikeProductModel as LikeProduct,
    LikeBlogModel as LikeBlog,
    ReportCategoryModel as ReportCategory,
    FollowUserModel as FollowUser,
    sequelize
};

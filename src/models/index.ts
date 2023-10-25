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
import UserCommentModel from './UserComment';
import BlogCommentModel from './UserComment';
import ProductCategoryModel from './ProductCategory';
import BlogModel from './Blog';
import BlogCategoryModel from './BlogCategory';
// Models Initialization
const initializeModels = () => {
     // Step 1: No dependencies
     GenderModel.initialize(sequelize);
     ProductCategoryModel.initialize(sequelize);
     BlogCategoryModel.initialize(sequelize);
     
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
     UserCommentModel.initialize(sequelize);
     BlogCommentModel.initialize(sequelize);
     CommentProductModel.initialize(sequelize);
}

// Relations Setup
const setupRelations = () => {
    // UserModel.hasMany(ProductModel, { foreignKey: 'userId' });
    // ProductModel.belongsTo(UserModel, { foreignKey: 'userId' });

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

    ProductModel.belongsTo(ProductCategoryModel, { foreignKey: 'productCategoryId' });
    ProductCategoryModel.hasMany(ProductModel, { foreignKey: 'productCategoryId' });
    

    // ProductModel.hasMany(CommentModel, { foreignKey: 'productId' });
    // CommentModel.belongsTo(ProductModel, { foreignKey: 'productId' });

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

    UserModel.belongsToMany(ProductModel, { through: UserProductModel, foreignKey: 'userId' });
    ProductModel.belongsToMany(UserModel, { through: UserProductModel, foreignKey: 'productId' });

    UserModel.belongsToMany(CommentModel, { through: UserCommentModel, foreignKey: 'userId' });
    CommentModel.belongsToMany(UserModel, { through: UserCommentModel, foreignKey: 'commentId' });
    
    BlogModel.belongsToMany(CommentModel, { through: BlogCommentModel, foreignKey: 'blogId' });
    CommentModel.belongsToMany(BlogModel, { through: BlogCommentModel, foreignKey: 'commentId' });

    CommentModel.belongsToMany(ProductModel, { through: CommentProductModel, foreignKey: 'commentId' });
    ProductModel.belongsToMany(CommentModel, { through: CommentProductModel, foreignKey: 'productId' });

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
    UserCommentModel as UserComment,
    ProductCategoryModel as ProductCategory,
    BlogModel as Blog,
    BlogCategoryModel as BlogCategory,
    BlogCommentModel as BlogModel,
    sequelize
};

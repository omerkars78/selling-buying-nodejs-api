import sequelize from '../config/database';

import UserModel from './User';
import ProductModel from './Product';
import MessageModel from './message';
import LikeModel from './like';
import CommentModel from './comment';
import PaymentModel from './Payment';
import InvoiceModel from './Invoice';
import PaymentCardModel from './PaymentCard';

// Models Initialization
const initializeModels = () => {
    UserModel.initialize(sequelize);
    ProductModel.initialize(sequelize);
    MessageModel.initialize(sequelize);
    LikeModel.initialize(sequelize);
    CommentModel.initialize(sequelize);
    PaymentModel.initialize(sequelize);
    InvoiceModel.initialize(sequelize);
    PaymentCardModel.initialize(sequelize);
}

// Relations Setup
const setupRelations = () => {
    UserModel.hasMany(ProductModel, { foreignKey: 'userId' });
    ProductModel.belongsTo(UserModel, { foreignKey: 'userId' });

    UserModel.hasMany(MessageModel, { foreignKey: 'senderId' });
    MessageModel.belongsTo(UserModel, { foreignKey: 'senderId' });

    UserModel.hasMany(LikeModel, { foreignKey: 'userId' });
    LikeModel.belongsTo(UserModel, { foreignKey: 'userId' });

    ProductModel.hasMany(LikeModel, { foreignKey: 'productId' });
    LikeModel.belongsTo(ProductModel, { foreignKey: 'productId' });

    UserModel.hasMany(CommentModel, { foreignKey: 'userId' });
    CommentModel.belongsTo(UserModel, { foreignKey: 'userId' });

    ProductModel.hasMany(CommentModel, { foreignKey: 'productId' });
    CommentModel.belongsTo(ProductModel, { foreignKey: 'productId' });

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
}

// Initialize and Setup
initializeModels();
setupRelations();

export {
    UserModel as User,
    ProductModel as Product,
    MessageModel as Message,
    LikeModel as Like,
    CommentModel as Comment,
    PaymentModel as Payment,
    InvoiceModel as Invoice,
    PaymentCardModel as PaymentCard,
    sequelize
};

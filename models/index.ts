import { Sequelize } from 'sequelize';
import sequelize from '../config/database';

import UserModel from './User';
import ProductModel from './Product';
import MessageModel from './message';
import LikeModel from './like';
import CommentModel from './comment';
import PaymentModel from './Payment';
import InvoiceModel from './Invoice';
import PaymentCardModel from './PaymentCard';
const User = new UserModel(sequelize);
const Product = new ProductModel(sequelize, User);
const Message = new MessageModel(sequelize, User);
const Like = new LikeModel(sequelize, User, Product);
const Comment = new CommentModel(sequelize, User, Product);
const Payment = new PaymentModel(sequelize, User, Product);
const Invoice = new InvoiceModel(sequelize, User, Payment);
const PaymentCard = new PaymentCardModel(sequelize, User);


// Relations
User.hasMany(Product, { foreignKey: 'userId' });
Product.belongsTo(User, { foreignKey: 'userId' });

User.hasMany(Message, { foreignKey: 'senderId' });
Message.belongsTo(User, { foreignKey: 'senderId' });

User.hasMany(Like, { foreignKey: 'userId' });
Like.belongsTo(User, { foreignKey: 'userId' });

Product.hasMany(Like, { foreignKey: 'productId' });
Like.belongsTo(Product, { foreignKey: 'productId' });

User.hasMany(Comment, { foreignKey: 'userId' });
Comment.belongsTo(User, { foreignKey: 'userId' });

Product.hasMany(Comment, { foreignKey: 'productId' });
Comment.belongsTo(Product, { foreignKey: 'productId' });

User.hasMany(Payment, { foreignKey: 'userId' });
Payment.belongsTo(User, { foreignKey: 'userId' });

Product.hasMany(Payment, { foreignKey: 'productId' });
Payment.belongsTo(Product, { foreignKey: 'productId' });

User.hasMany(Invoice, { foreignKey: 'userId' });
Invoice.belongsTo(User, { foreignKey: 'userId' });

Payment.hasOne(Invoice, { foreignKey: 'paymentId' });
Invoice.belongsTo(Payment, { foreignKey: 'paymentId' });

User.hasMany(PaymentCard, { foreignKey: 'userId' });
PaymentCard.belongsTo(User, { foreignKey: 'userId' });

export {
    User,
    Product,
    Message,
    Like,
    Comment,
    Payment,
    Invoice,
    PaymentCard,
    sequelize
};

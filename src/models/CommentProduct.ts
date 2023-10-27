import { DataTypes, Model, Sequelize } from 'sequelize';
import Comment from './Comment';
import Product from './Product';
import User from './User';

class CommentProduct extends Model {
    public commentId!: number;
    public productId!: number;
    public userId!: number;

    public static initialize(sequelize: Sequelize) {
        CommentProduct.init({
            commentId: {
                type: DataTypes.INTEGER.UNSIGNED,
                primaryKey: true,
                references: {
                    model: Comment,
                    key: 'id'
                },
                onDelete: 'CASCADE',
            },
            productId: {
                type: DataTypes.INTEGER.UNSIGNED,
                primaryKey: true,
                references: {
                    model: Product,
                    key: 'id'
                },
                onDelete: 'CASCADE',
            },
            userId:{
                type: DataTypes.INTEGER.UNSIGNED,
                primaryKey: true,
                references: {
                    model: User,
                    key: 'id'
                },
                onDelete: 'CASCADE',
            }
        }, {
            tableName: 'comment_product',
            sequelize: sequelize,
            paranoid:true
        });
    }
}

export default CommentProduct;

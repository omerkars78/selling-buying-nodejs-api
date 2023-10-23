import { DataTypes, Model, Sequelize } from 'sequelize';
import Comment from './comment';
import Product from './Product';


class CommentProduct extends Model {
    public commentId!: number;
    public productId!: number;

    public static initialize(sequelize: Sequelize) {
        CommentProduct.init({
            commentId: {
                type: DataTypes.INTEGER.UNSIGNED,
                primaryKey: true,
                references: {
                    model: Comment,
                    key: 'id'
                },
            },
            productId: {
                type: DataTypes.INTEGER.UNSIGNED,
                primaryKey: true,
                references: {
                    model: Product,
                    key: 'id'
                }
            }
        }, {
            tableName: 'comment_product',
            sequelize: sequelize,
            timestamps: false, 
        });
    }
}

export default CommentProduct;

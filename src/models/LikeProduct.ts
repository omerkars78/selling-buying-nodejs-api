import { DataTypes, Model, Sequelize } from 'sequelize';
import Product from './Product';
import Like from './Like';


class LikeProduct extends Model {
    public productId!: number;
    public likeId!: number;

    public static initialize(sequelize: Sequelize) {
        LikeProduct.init({
           likeId: {
                type: DataTypes.INTEGER.UNSIGNED,
                primaryKey: true,
                references: {
                    model: Like,
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
            }
        }, {
            tableName: 'like_product',
            sequelize: sequelize,
            paranoid:true
        });
    }
}

export default LikeProduct;

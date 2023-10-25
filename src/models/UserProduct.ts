// UserProducts.ts
import { DataTypes, Model, Sequelize } from 'sequelize';
import Product from './Product';
import User from './User';
class UserProduct extends Model {
    public userId!: number;
    public productId!: number;

    public static initialize(sequelize: Sequelize) {
        UserProduct.init({
            userId: {
                type: DataTypes.INTEGER.UNSIGNED,
                references: {
                    model: User,
                    key: 'id'
                },
                onDelete: 'CASCADE',
                primaryKey: true,
                allowNull: false,
            },
            productId: {
                type: DataTypes.INTEGER.UNSIGNED,
                references: {
                    model: Product,
                    key: 'id'
                },
                onDelete: 'CASCADE',
                primaryKey: true,
                allowNull: false,
            }
        }, {
            tableName: 'user_product',
            sequelize: sequelize,
            timestamps: false,  
        });
    }
}

export default UserProduct;

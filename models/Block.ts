import { DataTypes, Model, Sequelize } from 'sequelize';

class Block extends Model {
    public id!: number;
    public blockerId!: number;
    public blockedId!: number;

    public static initialize(sequelize: Sequelize) {
        Block.init({
            id: {
                type: DataTypes.INTEGER.UNSIGNED,
                autoIncrement: true,
                primaryKey: true,
            },
            blockerId: {
                type: DataTypes.INTEGER.UNSIGNED,
                references: {
                    model: 'users',
                    key: 'id'
                },
                allowNull: false,
            },
            blockedId: {
                type: DataTypes.INTEGER.UNSIGNED,
                references: {
                    model: 'users',
                    key: 'id'
                },
                allowNull: false,
            },
        }, {
            tableName: 'blocks',
            sequelize: sequelize,  // this bit is important
            paranoid: true
        });
    }
}

export default Block;

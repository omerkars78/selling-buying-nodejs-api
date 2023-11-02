import { DataTypes, Model, Sequelize } from 'sequelize';

import User from './User';

class FollowUser extends Model {
    public followerId!: number;
    public followedId!: number;
    public static initialize(sequelize: Sequelize) {
        FollowUser.init({
           followerId: {
                type: DataTypes.INTEGER.UNSIGNED,
                primaryKey: true,
                references: {
                    model: User,
                    key: 'id'
                },
                onDelete: 'CASCADE',
            },
            followedId: {
                type: DataTypes.INTEGER.UNSIGNED,
                primaryKey: true,
                references: {
                    model: User,
                    key: 'id'
                },
                onDelete: 'CASCADE',
            }
        }, {
            tableName: 'follow_user',
            sequelize: sequelize,
            paranoid:true
        });
    }
}

export default FollowUser;

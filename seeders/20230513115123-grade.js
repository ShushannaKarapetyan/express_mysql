'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        /**
         * Add seed commands here.
         *
         * Example:
         * await queryInterface.bulkInsert('People', [{
         *   name: 'John Doe',
         *   isBetaMember: false
         * }], {});
         */
        const now = new Date();

        await queryInterface.bulkInsert('grades', [
            {
                grade: 9,
                createdAt: now,
                updatedAt: now,
            },
            {
                grade: 10,
                createdAt: now,
                updatedAt: now,
            },
            {
                grade: 11,
                createdAt: now,
                updatedAt: now,
            }
        ])
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */

        await queryInterface.bulkDelete('grades', null, {});
    }
};

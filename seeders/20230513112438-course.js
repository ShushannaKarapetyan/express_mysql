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

        await queryInterface.bulkInsert('courses', [
            {
                name: 'Science',
                createdAt: now,
                updatedAt: now,
            },
            {
                name: 'Maths',
                createdAt: now,
                updatedAt: now,
            },
            {
                name: 'History',
                createdAt: now,
                updatedAt: now,
            }
        ], {});
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */

        await queryInterface.bulkDelete('courses', null, {});
    }
};

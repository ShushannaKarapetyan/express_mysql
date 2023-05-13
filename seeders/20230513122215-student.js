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

        await queryInterface.bulkInsert('students', [
            {
                name: "John Baker",
                gradeId: 2,
                createdAt: now,
                updatedAt: now,
            },
            {
                name: "Max Butler",
                gradeId: 1,
                createdAt: now,
                updatedAt: now,
            },
            {
                name: "Ryan Fisher",
                gradeId: 3,
                createdAt: now,
                updatedAt: now,
            },
            {
                name: "Robert Gray",
                gradeId: 2,
                createdAt: now,
                updatedAt: now,
            },
            {
                name: "Sam Lewis",
                gradeId: 1,
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

        await queryInterface.bulkDelete('students', null, {});
    }
};

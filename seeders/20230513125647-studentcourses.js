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

        await queryInterface.bulkInsert('studentcourses', [
            {
                studentId: 1,
                courseId: 1,
            },
            {
                studentId: 2,
                courseId: 1,
            },
            {
                studentId: 2,
                courseId: 3,
            },
            {
                studentId: 3,
                courseId: 2,
            },
            {
                studentId: 1,
                courseId: 2,
            },
        ]);
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */

        await queryInterface.bulkDelete('studentcourses', null, {});
    }
};

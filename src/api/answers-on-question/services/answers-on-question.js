'use strict';

/**
 * answers-on-question service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::answers-on-question.answers-on-question');

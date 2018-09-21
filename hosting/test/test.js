import Vue from 'vue';
const MyComponent = require('../src/MyComponent.vue');
const assert = require('assert');

describe('MyComponent', () => {
    it('has a created hook', () => {
        expect(typeof MyComponent.created).toBe('function');
    });
})

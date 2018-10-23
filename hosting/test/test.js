import Vue from 'vue';
const FirebaseComponent = require('../src/components/Firebase.vue');
const assert = require('assert');

describe('Firebase', () => {
    it('has a created hook', () => {
        console.log(typeof FirebaseComponent.created);
        expect(typeof FirebaseComponent.created).toBe('function');
    });
})

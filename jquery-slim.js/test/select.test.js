import 'babel-polyfill';
import {select} from '../src/select';
import chai from 'chai';

let should = chai.should();
let res1 = select('#foo');
let res2 = select('.foo');
let res3 = select('div');
describe('type', ()=>{
    it('it should return a ID selector', ()=>{
        res1.should.equal('id selector');
    });
    it('it shoud return a class selector', ()=>{
        res2.should.equal('class selector');
    });
    it('it should return a element selector', ()=>{
        res3.should.equal('element selector');
    })
});

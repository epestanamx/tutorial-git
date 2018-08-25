const chai = require('chai');

describe('Prueba de ejemplo', () => {
  it('Esta prueba debería pasar', () => {
    chai.expect(1).to.equal(1);
  })
  
  it('Esta prueba debería fallar', () => {
    chai.expect(1).to.equal(0);
  })
})
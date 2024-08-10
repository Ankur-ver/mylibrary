import Vector from '../src/vector.js';
test("vector addition should work correctly",()=>{
    const v1=new Vector(1,2);
    const v2=new Vector(3,4);
    const result=v1.add(v2);
    expect(result.x).toBe(4);
    expect(result.y).toBe(6);
})
test("vector subtraction should work correctly",()=>{
    const v1=new Vector(5,7);
    const v2=new Vector(3,4);
    const result=v1.subtract(v2);
    expect(result.x).toBe(2);
    expect(result.y).toBe(3);
})
test("vector multiply should work correctly",()=>{
    const v=new Vector(1,2);
    const scalar=4;
    const result=v.multiply(scalar);
    expect(result.x).toBe(4);
    expect(result.y).toBe(8);
})
test("vector magnitude should work correctly",()=>{
    const v = new Vector(3, 4);
    const result = v.magnitude();
    
    expect(result).toBe(5); 
})
test("vector divide should work correctly",()=>{
    const v=new Vector(6,8);
    const scalar=2;
    const result=v.divide(scalar);
    expect(result.x).toBe(3);
    expect(result.y).toBe(4);
})
test("vector normalization should work correctly",()=>{
    const v = new Vector(3, 4);
    const normalized = v.normalize();
    
    expect(normalized.magnitude()).toBeCloseTo(1); 
    expect(normalized.x).toBeCloseTo(0.6);
    expect(normalized.y).toBeCloseTo(0.8);
})
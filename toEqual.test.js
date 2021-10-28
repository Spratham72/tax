test("true",()=>{
    expect( {} ).toEqual( {} )
})
test("true",()=>{
    expect( [] ).toEqual( [] )
})
test("true",()=>{
    expect( { a: 1, b: 2 } ).toEqual( { a:1 , b:2 } )
})
test("true",()=>{
   expect( [ 1, 2, 3 ] ).toEqual( [ 1, 2, 3 ] )
})
test("true",()=>{
    expect( { a: 1, b: { c: 1, d: 2 }} ).toEqual( { a: 1, b: { c: 1, d: 2 }} ) 
})
test("true",()=>{
    expect( [ 1, 2, [ 1, 2 ] ] ).toEqual( [ 1, 2, [ 1, 2 ]  ] )
})
test("false",()=>{
    expect( { a: 1, b: { c: 1, d: 2 }} ).toEqual( { a: 1, b: { e: 1, d: 2 }} )
})
test("false",()=>{
    expect( [ 1, 2, [ 1, 3] ] ).toEqual( [ 1, 2, [ 1, 2]  ] )
})

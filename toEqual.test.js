test("true",()=>{
    expect( {} ).toEqual( {} )
})
test("false",()=>{
    expect( [ 1, 2, [ 1, 3] ] ).not.toEqual( [ 1, 2, [ 1, 2]  ] )
})
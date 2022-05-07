import { render, screen } from '@testing-library/react';
import App from './App';
import React from "react";

describe( "all tests",() =>{

  it("test", function () {
    expect( 1 + 2 ).toBe( 3 );
  });

  it("have App", ()=>{
    App();
  });
})
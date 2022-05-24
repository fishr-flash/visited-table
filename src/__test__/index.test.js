import {fullClone} from "../utils";
import Smeta2 from "../smeta2";
import Smeta from "../smeta";
import React from "react";

describe( 'src/root', () => {
    it('should utils', function () {
        expect(fullClone(null)).toBe(null)
    });

    it('should  smeta', function () {
        const sm = <div>
            <Smeta />
            <Smeta2 />
        </div>;

        expect(sm).toMatchSnapshot(sm);
    });
})
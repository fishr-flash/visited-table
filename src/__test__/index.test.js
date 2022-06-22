
import {fullClone} from "../utils";
import Smeta2 from "../smeta3";
import Smeta from "../smeta";
import React from "react";

describe('src/root', () => {
    it('should utils', function () {
        expect(fullClone(null)).toBe(null)
    });

    it('should  smeta', function () {
        const sm = <div>
            <Smeta/>
            <Smeta2/>
        </div>;

        // const sh = shallow( Smeta );
        // expect(sh).toMatchSnapshot(sh);
        expect(sm).toMatchSnapshot(sm);
    });
})
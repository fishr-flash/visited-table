import {calculateTimes, parseArr} from "../utils";
import LoaderJson from "../parts/LoaderJson";
import {render, unmountComponentAtNode} from "react-dom";
import {act} from "react-dom/test-utils";

describe("smeta3", () => {
    let container = null;
    beforeEach(() => {
        // подготавливаем DOM-элемент, куда будем рендерить
        container = document.createElement("div");
        document.body.appendChild(container);
    });

    afterEach(() => {
        // подчищаем после завершения
        unmountComponentAtNode(container);
        container.remove();
        container = null;
    });

    it('parseArr', function () {
        const data = [
            {
                "name": "Верстка",
                "duration": 3,
                "hours": 6
            },
            {
                "name": "Функциональност и API",
                "duration": 1,
                "hours": 2
            }
        ]
        expect(parseArr(data)).toBe(8);
        parseArr( data);
    });

    it('should  calculateTimes', function () {
        const obj = {
            "name": "Верстка",
            "duration": 3,
            "hours": 6
        }
        expect(calculateTimes( obj )).toBe(6);
        expect(calculateTimes( obj )).not.toBe(1);
    });

    it( 'should encode', function (){
        const sign = '\uD800\uDFFF';
        const sign2 = 'Привет мир!';
        expect(encodeURIComponent(sign)).toBe('%F0%90%8F%BF');
        // expect(decodeURIComponent(sign)).toBe('%F0%90%8F%BF');
        expect(encodeURI(sign)).toBe('%F0%90%8F%BF');
        expect(encodeURIComponent(sign2)).toBe('%D0%9F%D1%80%D0%B8%D0%B2%D0%B5%D1%82%20%D0%BC%D0%B8%D1%80!');
        expect(encodeURI(sign2)).toBe('%D0%9F%D1%80%D0%B8%D0%B2%D0%B5%D1%82%20%D0%BC%D0%B8%D1%80!');
    })

    it('should data.js', function () {
        LoaderJson(null);
        const l = <LoaderJson />
        expect( l).toBe( l);
        expect(l).toMatchSnapshot();
    });

    it('should  mount LoaderJson', function () {
        jest.fn();
        // eslint-disable-next-line testing-library/no-unnecessary-act
        act(() =>{
            render(<LoaderJson props={null} />, container);
        });

        const button = document.querySelector("[data-testid=toggle]");
        expect(button.innerHTML).toBe("Download!");
        /*act(() => {
            for (let i = 0; i < 1; i++) {
                button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
            }
        });*/

        expect(container.textContent).toBe("LoadDownload! downloadSave");
    });

})
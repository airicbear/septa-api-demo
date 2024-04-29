import { SetStateAction } from "react";

export function handleURLParamChange(
    event: React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLInputElement>,
    urlParams: URLSearchParams,
    param: string,
    setURLParams: (value: SetStateAction<URLSearchParams>) => void,
    handleChange: (params: URLSearchParams) => void,
) {

    const newStation = event.target.value;

    let modifiedURLParams = urlParams;
    modifiedURLParams.set(param, newStation);
    setURLParams(modifiedURLParams);

    handleChange(modifiedURLParams);
}
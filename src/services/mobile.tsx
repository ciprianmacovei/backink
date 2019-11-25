export const isMobile = (): Promise<any> => {
    const promise = new Promise((rez,rej) => {
        window.innerWidth <= 790 ?
            rez(true) : rez(false)
    });
    return promise;
};

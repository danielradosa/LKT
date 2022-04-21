import midrowModule from './levels/midrow';

const engine = () => {
    
    const mid = midrowModule;
    const { mid_a, mid_b, mid_c, mid_d, mid_e } = midrowModule();

    console.log(mid_a);

    return {
        mid_a,
        mid_b,
        mid_c,
        mid_d,
        mid_e,
        mid,
        engine
    }
}

void engine();
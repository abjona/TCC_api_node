const compare = async (rating, characters) => {
  for (let rate of rating) {
    let deltaLindex = rate.minutiae.l_index.singularity.delta;
    let coreLindex = rate.minutiae.l_index.singularity.loop;

    let deltaLmedium = rate.minutiae.l_medium.singularity.delta;
    let coreLmedium = rate.minutiae.l_medium.singularity.loop;

    let deltaLminimun = rate.minutiae.l_minimun.singularity.delta;
    let coreLminimun = rate.minutiae.l_minimun.singularity.loop;

    let deltaLring = rate.minutiae.l_ring.singularity.delta;
    let coreLring = rate.minutiae.l_ring.singularity.loop;

    let deltaLthumb = rate.minutiae.l_thumb.singularity.delta;
    let coreLthumb = rate.minutiae.l_thumb.singularity.loop;

    //mao direita

    let deltaRindex = rate.minutiae.r_index.singularity.delta;
    let coreRindex = rate.minutiae.r_index.singularity.loop;

    let deltaRmedium = rate.minutiae.r_medium.singularity.delta;
    let coreRmedium = rate.minutiae.r_medium.singularity.loop;

    let deltaRminimun = rate.minutiae.r_minimun.singularity.delta;
    let coreRminimun = rate.minutiae.r_minimun.singularity.loop;

    let deltaRring = rate.minutiae.r_ring.singularity.delta;
    let coreRring = rate.minutiae.r_ring.singularity.loop;

    let deltaRthumb = rate.minutiae.r_thumb.singularity.delta;
    let coreRthumb = rate.minutiae.r_thumb.singularity.loop;

    for (let char of characters) {
      if (deltaLindex == char.deltaQtd && coreLindex == char.coreQtd) {
        rate.minutiae.l_index.class = char.description;
        rate.minutiae.l_index.characters = char.characters;
      }

      if (deltaLmedium == char.deltaQtd && coreLmedium == char.coreQtd) {
        rate.minutiae.l_medium.class = char.description;
        rate.minutiae.l_medium.characters = char.characters;
      }

      if (deltaLminimun == char.deltaQtd && coreLminimun == char.coreQtd) {
        rate.minutiae.l_minimun.class = char.description;
        rate.minutiae.l_minimun.characters = char.characters;
      }

      if (deltaLring == char.deltaQtd && coreLring == char.coreQtd) {
        rate.minutiae.l_ring.class = char.description;
        rate.minutiae.l_ring.characters = char.characters;
      }

      if (deltaLthumb == char.deltaQtd && coreLthumb == char.coreQtd) {
        rate.minutiae.l_index.class = char.description;
        rate.minutiae.l_index.characters = char.characters;
      }

      if (deltaRindex == char.deltaQtd && coreRindex == char.coreQtd) {
        rate.minutiae.r_index.class = char.description;
        rate.minutiae.r_index.characters = char.characters;
      }

      if (deltaRmedium == char.deltaQtd && coreRmedium == char.coreQtd) {
        rate.minutiae.r_medium.class = char.description;
        rate.minutiae.r_medium.characters = char.characters;
      }

      if (deltaRminimun == char.deltaQtd && coreRminimun == char.coreQtd) {
        rate.minutiae.r_minimun.class = char.description;
        rate.minutiae.r_minimun.characters = char.characters;
      }

      if (deltaRring == char.deltaQtd && coreRring == char.coreQtd) {
        rate.minutiae.r_ring.class = char.description;
        rate.minutiae.r_ring.characters = char.characters;
      }

      if (deltaRthumb == char.deltaQtd && coreRthumb == char.coreQtd) {
        rate.minutiae.r_index.class = char.description;
        rate.minutiae.r_index.characters = char.characters;
      }
    }
  }

  return rating;
};

module.exports = {
    compare
};

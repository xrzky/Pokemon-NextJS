import usePokemonDetail from "@/hooks/usePokemonDetail";
import React from "react";

const imageDetail = ({ id }) => {
    const { pokemonDetail } = usePokemonDetail(id);

  return (
    <div className="relative m-auto mt-10 w-52 h-52">
      <img
        className="w-full h-full"
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonDetail.id}.svg`}
        alt={pokemonDetail.name}
      />
    </div>
  );
};

export default imageDetail;

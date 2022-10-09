import React from "react";
import { GridColumn, GridItem, GridRow } from "./Grid.styles";

export default function Grid({ photos = [] }) {
  return (
    <GridRow>
      <GridColumn>
        {photos.splice(0, 10).map((photo) => (
          <GridItem
            src={photo.src.original}
            height={photo.height}
            alt={photo.alt_description}
          />
        ))}
      </GridColumn>
      <GridColumn>
        {photos.splice(0, 18).map((photo) => (
          <GridItem
            src={photo.src.original}
            height={photo.height}
            alt={photo.alt_description}
          />
        ))}
      </GridColumn>
    </GridRow>
  );
}

import React from "react";
import { GridColumn, GridItem, GridRow } from "./Grid.styles";

export default function Grid({ photos = [] }) {
  return (
    <GridRow>
      <GridColumn>
        {photos.slice(0, 5).map((photo) => (
          <GridItem
            src={photo.src.large}
            height={photo.height}
            alt={photo.alt_description}
          />
        ))}
      </GridColumn>
      <GridColumn>
        {photos.slice(5, 10).map((photo) => (
          <GridItem
            src={photo.src.large}
            height={photo.height}
            alt={photo.alt_description}
          />
        ))}
      </GridColumn>
      <GridColumn>
        {photos.slice(10, 15).map((photo) => (
          <GridItem
            src={photo.src.large}
            height={photo.height}
            alt={photo.alt_description}
          />
        ))}
      </GridColumn>
      <GridColumn>
        {photos.slice(15).map((photo) => (
          <GridItem
            src={photo.src.large}
            height={photo.height}
            alt={photo.alt_description}
          />
        ))}
      </GridColumn>
    </GridRow>
  );
}

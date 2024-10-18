export interface ProductPreviewProps {
  id: number;
  name: string;
  feature: [ProductFeatureProps?, ProductFeatureProps?, ProductFeatureProps?];
}

interface ProductFeatureProps {
  name: string;
  value: string | number;
}

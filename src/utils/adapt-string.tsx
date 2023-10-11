export const adaptString = (
  string: string,
  variant: 'withBr' | 'withoutBr'
): React.ReactNode => {
  if (variant === 'withBr') {
    const parts = string.split('|');
    return parts.reduce(
      (acc: React.ReactNode[], part: string, index: number) => {
        if (index === 0) {
          return [part];
        }
        return [...acc, <br key={index} />, part];
      },
      []
    );
  }

  if (variant === 'withoutBr') {
    return string.replace('| ', '');
  }
};

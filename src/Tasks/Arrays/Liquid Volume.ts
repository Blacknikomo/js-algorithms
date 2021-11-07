export function liquidVolume(height: number[]): number {
  const volumes = new Array(height.length);
  let max = -Infinity;

  for (let i = 0; i < height.length - 1; i++) {
    const start = height[i];
    for (let j = i + 1; j < height.length; j++) {
      const current = height[j];
      const lowest = Math.min(start, current);
      const volume = (j - i) * lowest;

      if (volumes[i] == null || volume > volumes[i]) {
        volumes[i] = volume;
      }

      if (volume > max) {
        max = volume;
      }
    }
  }

  return max;
};

export function liquidVolume2Pointers(height: number[]): number {
  let pointer1 = 0;
  let pointer2 = height.length - 1;
  let max = -Infinity;

  while (pointer1 !== pointer2) {
    const leftHeight = height[pointer1];
    const rightHeight = height[pointer2];
    const lowest = Math.min(leftHeight, rightHeight);

    const volume = lowest * Math.abs(pointer2 - pointer1);

    if (lowest === leftHeight) {
      pointer1 += 1;
    } else {
      pointer2 -= 1;
    }
    if (volume > max) {
      max = volume;
    }
  }

  return max;
};

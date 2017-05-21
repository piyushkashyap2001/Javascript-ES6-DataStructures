function ArrayList() {
  let array = [];

  this.insert = (item) => {
    array.push(item);
  };

  const swap = (array, index1, index2) => {
    const aux = array[index1];
    array[index1] = array[index2];
    array[index2] = aux;
        // ES2015 swap - Firefox only, for other browser, uncomment code above and coment line below
        // [array[index1], array[index2]] = [array[index2], array[index1]];
  };

  this.toString = () => array.join();

  this.array = () => array;

  this.bubbleSort = () => {
    const length = array.length;
    for (let i = 0; i < length; i += 1) {
      console.log('--- ');
      for (let j = 0; j < length - 1; j += 1) {
        console.log(`compare ${array[j]} with ${array[j + 1]}`);
        if (array[j] > array[j + 1]) {
          console.log(`swap ${array[j]} with ${array[j + 1]}`);
          swap(array, j, j + 1);
        }
      }
    }
  };

  this.modifiedBubbleSort = () => {
    const length = array.length;
    for (let i = 0; i < length; i += 1) {
      console.log('--- ');
      for (let j = 0; j < length - 1 - i; j += 1) {
        console.log(`compare ${array[j]} with ${array[j + 1]}`);
        if (array[j] > array[j + 1]) {
          console.log(`swap ${array[j]} with ${array[j + 1]}`);
          swap(j, j + 1);
        }
      }
    }
  };

  this.selectionSort = () => {
    const length = array.length;
    let indexMin;
    for (let i = 0; i < length - 1; i += 1) {
      indexMin = i;
      console.log(`index ${array[i]}`);
      for (let j = i; j < length; j += 1) {
        if (array[indexMin] > array[j]) {
          console.log(`new index min ${array[j]}`);
          indexMin = j;
        }
      }
      if (i !== indexMin) {
        console.log(`swap ${array[i]} with ${array[indexMin]}`);
        swap(i, indexMin);
      }
    }
  };

  this.insertionSort = () => {
    const length = array.length;
    let j;
    let temp;
    for (let i = 1; i < length; i += 1) {
      j = i;
      temp = array[i];
      console.log(`to be inserted ${temp}`);
      while (j > 0 && array[j - 1] > temp) {
        console.log(`shift ${array[j - 1]}`);
        array[j] = array[j - 1];
        j -= 1;
      }
      console.log(`insert ${temp}`);
      array[j] = temp;
    }
  };

  const insertionSort_ = (array) => {
    const length = array.length;
    let j;
    let temp;
    for (let i = 1; i < length; i += 1) {
      j = i;
      temp = array[i];
      while (j > 0 && array[j - 1] > temp) {
        array[j] = array[j - 1];
        j -= 1;
      }
      array[j] = temp;
    }
  };

  const mergeSortRec = (array) => {
    const length = array.length;
    if (length === 1) {
      console.log(array);
      return array;
    }
    const mid = Math.floor(length / 2);
    const left = array.slice(0, mid);
    const right = array.slice(mid, length);
    return merge(mergeSortRec(left), mergeSortRec(right));
  };

  this.mergeSort = () => {
    array = mergeSortRec(array);
  };

  const merge = (left, right) => {
    const result = [];
    let il = 0;
    let ir = 0;
    while (il < left.length && ir < right.length) {
      if (left[il] < right[ir]) {
        result.push(left[il += 1]);
      } else {
        result.push(right[ir += 1]);
      }
    }

    while (il < left.length) {
      result.push(left[il += 1]);
    }

    while (ir < right.length) {
      result.push(right[ir += 1]);
    }

    console.log(result);

    return result;
  };

  const partition = (array, left, right) => {
    const pivot = array[Math.floor((right + left) / 2)];
    let i = left;
    let j = right;

    console.log(`pivot is ${pivot}; left is ${left}; right is ${right}`);

    while (i <= j) {
      while (array[i] < pivot) {
        i += 1;
        console.log(`i = ${i}`);
      }
      while (array[j] > pivot) {
        j -= 1;
        console.log(`j = ${j}`);
      }
      if (i <= j) {
        console.log(`swap ${array[i]} with ${array[j]}`);
        swap(array, i, j);
        i += 1;
        j -= 1;
      }
    }
    return i;
  };

  const quick = (array, left, right) => {
    let index;
    if (array.length > 1) {
      index = partition(array, left, right);
      if (left < index - 1) {
        quick(array, left, index - 1);
      }
      if (index < right) {
        quick(array, index, right);
      }
    }
    return array;
  };

  this.quickSort = () => {
    quick(array, 0, array.length - 1);
  };

  const heapify = (array, heapSize, i) => {
    const left = i * 2 + 1;
    const right = i * 2 + 2;
    let largest = i;

    if (left < heapSize && array[left] > array[largest]) {
      largest = left;
    }
    if (right < heapSize && array[right] > array[largest]) {
      largest = right;
    }
    console.log(`Heapify Index = ${i} and Heap Size = ${heapSize}`);

    if (largest !== i) {
      console.log(`swap index ${i} with ${largest} (${+array[i]},${array[largest]})`);
      swap(array, i, largest);
      console.log(`heapify ${array.join()}`);
      heapify(array, heapSize, largest);
    }
  };
  const buildHeap = (array) => {
    console.log('building heap');
    const heapSize = array.length;
    for (let i = Math.floor(array.length / 2); i >= 0; i -= 1) {
      heapify(array, heapSize, i);
    }
    console.log(`heap created: ${array.join()}`);
  };

  this.heapSort = () => {
    let heapSize = array.length;
    buildHeap(array);
    while (heapSize > 1) {
      heapSize -= 1;
      console.log(`swap (${+array[0]},${array[heapSize]})`);
      swap(array, 0, heapSize);
      console.log(`heapify ${array.join()}`);
      heapify(array, heapSize, 0);
    }
  };

  this.countingSort = function () {
    let i;
    const maxValue = this.findMaxValue();
    let sortedIndex = 0;
    const counts = new Array(maxValue + 1);

    for (i = 0; i < array.length; i += 1) {
      if (!counts[array[i]]) {
        counts[array[i]] = 0;
      }
      counts[array[i]] += 1;
    }

    console.log(`Frequencies: ${counts.join()}`);

    for (i = 0; i < counts.length; i += 1) {
      while (counts[i] > 0) {
        array[sortedIndex += 1] = i;
        counts[i] -= 1;
      }
    }
  };

  this.bucketSort = function (bucketSize) {
    let i;
    const minValue = this.findMinValue();
    const maxValue = this.findMaxValue();
    const BUCKET_SIZE = 5;

    console.log(`minValue ${minValue}`);
    console.log(`maxValue ${maxValue}`);

    bucketSize = bucketSize || BUCKET_SIZE;
    const bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;
    const buckets = new Array(bucketCount);
    console.log(`bucketSize = ${bucketCount}`);
    for (i = 0; i < buckets.length; i += 1) {
      buckets[i] = [];
    }
    for (i = 0; i < array.length; i += 1) {
      buckets[Math.floor((array[i] - minValue) / bucketSize)].push(array[i]);
      console.log(`pushing item ${array[i]} to bucket index ${Math.floor((array[i] - minValue) / bucketSize)}`);
    }
    array = [];
    for (i = 0; i < buckets.length; i += 1) {
      insertionSort_(buckets[i]);

      console.log(`bucket sorted ${i}: ${buckets[i].join()}`);

      for (let j = 0; j < buckets[i].length; j += 1) {
        array.push(buckets[i][j]);
      }
    }
  };

  const countingSortForRadix = (array, radixBase, significantDigit, minValue) => {
    let i;
    let countsIndex;
    const counts = new Array(radixBase);
    const aux = new Array(radixBase);
    for (i = 0; i < radixBase; i += 1) {
      counts[i] = 0;
    }
    for (i = 0; i < array.length; i += 1) {
      countsIndex = Math.floor(((array[i] - minValue) / significantDigit) % radixBase);
      counts[countsIndex]++;
    }
    for (i = 1; i < radixBase; i += 1) {
      counts[i] += counts[i - 1];
    }
    for (i = array.length - 1; i >= 0; i -= 1) {
      countsIndex = Math.floor(((array[i] - minValue) / significantDigit) % radixBase);
      aux[--counts[countsIndex]] = array[i];
    }
    for (i = 0; i < array.length; i += 1) {
      array[i] = aux[i];
    }
    return array;
  };
  this.radixSort = (radixBase) => {
    const minValue = this.findMinValue();
    const maxValue = this.findMaxValue();
    let radixBase = radixBase || 10;

        // Perform counting sort for each significant digit), starting at 1
    let significantDigit = 1;
    while (((maxValue - minValue) / significantDigit) >= 1) {
      console.log(`radix sort for digit ${significantDigit}`);
      array = countingSortForRadix(array, radixBase, significantDigit, minValue);
      console.log(array.join());
      significantDigit *= radixBase;
    }
  };

  this.sequentialSearch = (item) => {
    for (let i = 0; i < array.length; i += 1) {
      if (item === array[i]) {
        return i;
      }
    }
    return -1;
  };

  this.findMaxValue = () => {
    let max = array[0];
    for (let i = 1; i < array.length; i += 1) {
      if (max < array[i]) {
        max = array[i];
      }
    }
    return max;
  };

  this.findMinValue = () => {
    let min = array[0];
    for (let i = 1; i < array.length; i += 1) {
      if (min > array[i]) {
        min = array[i];
      }
    }
    return min;
  };

  this.binarySearch = (item) => {
    this.quickSort();
    let low = 0;
    let high = array.length - 1;
    let mid;
    let element;

    while (low <= high) {
      mid = Math.floor((low + high) / 2);
      element = array[mid];
      console.log(`mid element is ${element}`);
      if (element < item) {
        low = mid + 1;
        console.log(`low is ${low}`);
      } else if (element > item) {
        high = mid - 1;
        console.log(`high is ${high}`);
      } else {
        console.log('found it');
        return mid;
      }
    }
    return -1;
  };
}

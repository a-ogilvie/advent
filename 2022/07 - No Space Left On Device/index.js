'use strict';

/**
 * @param {Array<string>} input
 * @returns {number}
 */
function partOne(input) {
  const filesystem = buildFilesystem(input);

  let total = 0;

  analyzeFilesystem(filesystem, (directory) => {
    if (directory.size <= 100_000) total += directory.size;
  });

  return total;
}

/**
 * @param {Array<string>} input
 * @returns {number}
 */
function partTwo(input) {
  const filesystem = buildFilesystem(input);

  const currentSpace = 70_000_000 - filesystem.size;
  const requiredSpace = 30_000_000 - currentSpace;

  /** @type {Array<Directory>} */
  const deletionCandidates = [];

  analyzeFilesystem(filesystem, (directory) => {
    if (directory.size >= requiredSpace) deletionCandidates.push(directory);
  });

  return Math.min(...deletionCandidates.map((candidate) => candidate.size));
}

/**
 * @param {Array<string>} input
 * @returns {Directory}
 */
function buildFilesystem(input) {
  const relevantInput = input.filter(
    (command) => !command.startsWith('dir') && !command.startsWith('$ ls')
  );

  const filesystem = new Directory('/', null);

  /** @type {Directory} */
  let workingDirectory = null;
  for (const command of relevantInput) {
    if (command.startsWith('$ cd')) {
      const [, , newDirectoryLabel] = command.split(' ');

      if (newDirectoryLabel === '/') {
        workingDirectory = filesystem;
      } else if (newDirectoryLabel === '..') {
        workingDirectory = workingDirectory.parent;
      } else {
        const newDirectory = new Directory(newDirectoryLabel, workingDirectory);
        workingDirectory.children.push(newDirectory);
        workingDirectory = newDirectory;
      }
    } else {
      const [filesize] = command.split(' ');

      let current = workingDirectory;
      while (current.parent) {
        current.size += Number(filesize);
        current = current.parent;
      }
      current.size += Number(filesize);
    }
  }

  return filesystem;
}

/**
 * @param {Directory} filesystem
 * @param {(directory: Directory) => void} action
 */
function analyzeFilesystem(filesystem, action) {
  action(filesystem);

  for (const child of filesystem.children) {
    analyzeFilesystem(child, action);
  }
}

class Directory {
  /**
   * @param {string} label
   * @param {Directory} parent
   */
  constructor(label, parent) {
    this.label = label;
    this.parent = parent;

    /** @type {Array<Directory>} */
    this.children = [];
    /** @type {number} */
    this.size = 0;
  }
}

module.exports = { partOne, partTwo };

import packageJson from '../../package.json';

export const printAppInfo = () => {
  const { name, version, codeName } = packageJson;

  console.log(
    '%c%s',
    'color: white; background: blue;',
    `.: ${name} - ver. ${version} - Codename: ${codeName}`,
  );
  console.log(
    '"I am still learning" - An 87 years old Michelangelo Buonarroti.',
  );
};

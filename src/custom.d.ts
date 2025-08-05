declare module '*.png' {
    const value: string
    export default value
  }
  declare module '*.webp' {
    const value: string;
    export default value;
  }
// custom.d.ts
declare module './components/NavBar' {
  const component: React.FC;
  export default component;
}

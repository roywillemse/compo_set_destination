(() => ({
  name: 'HiddenInput',
  type: 'CONTENT_COMPONENT',
  allowedTypes: [],
  orientation: 'HORIZONTAL',
  jsx: (() => {
    const {
      disabled,
      customModelAttribute: customModelAttributeObj,
      nameAttribute,
      dataComponentAttribute = ['HiddenInput'],
    } = options;

    const { useText, env, getCustomModelAttribute } = B;
    const isDev = env === 'dev';
    const {
      id: customModelAttributeId,
      value: defaultValue = [''],
      required: defaultRequired = false,
    } = customModelAttributeObj;
    const customModelAttribute = getCustomModelAttribute(
      customModelAttributeId,
    );
    const [currentValue, setCurrentValue] = useState(
      useText(defaultValue, { rawValue: true }),
    );
    const {
      name: customModelAttributeName,
      validations: { required: attributeRequired } = {},
    } = customModelAttribute || {};
    const nameAttributeValue = useText(nameAttribute);
    const required = customModelAttribute ? attributeRequired : defaultRequired;
    const dataComponentAttributeValue = useText(dataComponentAttribute);

    useEffect(() => {
      if (isDev) {
        setCurrentValue(useText(defaultValue));
      }
    }, [isDev, defaultValue]);

    const InputCmp = (
      <input
        className={isDev && classes.pristine}
        type={isDev ? 'text' : 'hidden'}
        name={nameAttributeValue || customModelAttributeName}
        value={isDev ? currentValue || '{{ hidden input }}' : currentValue}
        required={required}
        disabled={disabled}
        data-component={dataComponentAttributeValue}
      />
    );

    return isDev ? <div className={classes.root}>{InputCmp}</div> : InputCmp;
  })(),
  styles: () => () => ({
    root: {
      '& > *': {
        pointerEvents: 'none',
      },
    },
    pristine: {
      borderWidth: '0.0625rem',
      borderColor: '#AFB5C8',
      borderStyle: 'dashed',
      backgroundColor: '#F0F1F5',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '2rem',
      width: '100%',
      fontSize: '0.75rem',
      color: '#262A3A',
      textTransform: 'uppercase',
      boxSizing: 'border-box',
      textAlign: 'center',
    },
  }),
}))();

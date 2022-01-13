(() => ({
  name: 'Card Actions',
  icon: 'CardActionsIcon',
  category: 'CARDS',
  keywords: ['Cards', 'card', 'actions', 'cardactions'],
  structure: [
    {
      name: 'CardActions',
      options: [
        {
          type: 'CUSTOM',
          label: 'Alignment',
          key: 'alignment',
          value: 'flex-start',
          configuration: {
            as: 'BUTTONGROUP',
            dataType: 'string',
            allowedInput: [
              {
                name: 'Start',
                value: 'flex-start',
              },
              {
                name: 'Center',
                value: 'center',
              },
              {
                name: 'End',
                value: 'flex-end',
              },
            ],
          },
        },
        {
          type: 'TOGGLE',
          label: 'Disable spacing',
          key: 'disableSpacing',
          value: false,
        },
        {
          value: false,
          label: 'Advanced settings',
          key: 'advancedSettings',
          type: 'TOGGLE',
        },
        {
          type: 'VARIABLE',
          label: 'Test attribute',
          key: 'dataComponentAttribute',
          value: ['CardActions'],
          configuration: {
            condition: {
              type: 'SHOW',
              option: 'advancedSettings',
              comparator: 'EQ',
              value: true,
            },
          },
        },
      ],
      descendants: [
        {
          name: 'Button',
          options: [
            {
              label: 'Toggle visibility',
              key: 'visible',
              value: true,
              type: 'TOGGLE',
              configuration: {
                as: 'VISIBILITY',
              },
            },
            {
              type: 'VARIABLE',
              label: 'Button text',
              key: 'buttonText',
              value: ['Button'],
            },
            {
              value: '',
              label: 'Action',
              key: 'actionId',
              type: 'ACTION',
              configuration: {
                apiVersion: 'v1',
              },
            },
            {
              value: false,
              label: 'Full width',
              key: 'fullWidth',
              type: 'TOGGLE',
            },
            {
              label: 'Icon',
              key: 'icon',
              value: 'None',
              type: 'ICON',
            },
            {
              value: 'small',
              label: 'Icon size',
              key: 'size',
              type: 'CUSTOM',
              configuration: {
                as: 'BUTTONGROUP',
                dataType: 'string',
                allowedInput: [
                  { name: 'Large', value: 'large' },
                  { name: 'Medium', value: 'medium' },
                  { name: 'Small', value: 'small' },
                ],
                condition: {
                  type: 'HIDE',
                  option: 'icon',
                  comparator: 'EQ',
                  value: 'None',
                },
              },
            },
            {
              type: 'CUSTOM',
              label: 'Icon position',
              key: 'iconPosition',
              value: 'start',
              configuration: {
                as: 'BUTTONGROUP',
                dataType: 'string',
                condition: {
                  type: 'HIDE',
                  option: 'icon',
                  comparator: 'EQ',
                  value: 'None',
                },
                allowedInput: [
                  { name: 'Start', value: 'start' },
                  { name: 'End', value: 'end' },
                ],
              },
            },
            {
              value: ['0rem', '0rem', '0rem', '0rem'],
              label: 'Outer space',
              key: 'outerSpacing',
              type: 'SIZES',
            },
            {
              label: 'Disabled',
              key: 'disabled',
              value: false,
              type: 'TOGGLE',
            },
            {
              label: 'Add Tooltip',
              key: 'addTooltip',
              value: false,
              type: 'TOGGLE',
              configuration: {
                as: 'VISIBILITY',
              },
            },
            {
              label: 'Toggle tooltip visibility',
              key: 'hasVisibleTooltip',
              value: true,
              type: 'TOGGLE',
              configuration: {
                as: 'VISIBILITY',
                condition: {
                  type: 'SHOW',
                  option: 'addTooltip',
                  comparator: 'EQ',
                  value: true,
                },
              },
            },
            {
              type: 'VARIABLE',
              label: 'Tooltip Content',
              key: 'tooltipContent',
              value: ['Tips'],
              configuration: {
                condition: {
                  type: 'SHOW',
                  option: 'addTooltip',
                  comparator: 'EQ',
                  value: true,
                },
              },
            },
            {
              label: 'Tooltip Placement',
              key: 'tooltipPlacement',
              value: 'bottom',
              type: 'CUSTOM',
              configuration: {
                as: 'DROPDOWN',
                dataType: 'string',
                allowedInput: [
                  {
                    name: 'Top Start',
                    value: 'top-start',
                  },
                  {
                    name: 'Top',
                    value: 'top',
                  },
                  {
                    name: 'Top End',
                    value: 'top-end',
                  },
                  {
                    name: 'Right',
                    value: 'right',
                  },
                  {
                    name: 'Left',
                    value: 'left',
                  },
                  {
                    name: 'Botttom Start',
                    value: 'bottom-start',
                  },
                  {
                    name: 'Bottom',
                    value: 'bottom',
                  },
                  {
                    name: 'Bottom End',
                    value: 'bottom-end',
                  },
                ],
                condition: {
                  type: 'SHOW',
                  option: 'addTooltip',
                  comparator: 'EQ',
                  value: true,
                },
              },
            },
            {
              type: 'COLOR',
              label: 'Tooltip Background',
              key: 'tooltipBackground',
              value: 'Medium',
              configuration: {
                condition: {
                  type: 'SHOW',
                  option: 'addTooltip',
                  comparator: 'EQ',
                  value: true,
                },
              },
            },
            {
              type: 'COLOR',
              label: 'Tooltip Text',
              key: 'tooltipText',
              value: 'Black',
              configuration: {
                condition: {
                  type: 'SHOW',
                  option: 'addTooltip',
                  comparator: 'EQ',
                  value: true,
                },
              },
            },
            {
              value: false,
              label: 'Advanced settings',
              key: 'advancedSettings',
              type: 'TOGGLE',
            },
            {
              type: 'VARIABLE',
              label: 'Test attribute',
              key: 'dataComponentAttribute',
              value: ['Button'],
              configuration: {
                condition: {
                  type: 'SHOW',
                  option: 'advancedSettings',
                  comparator: 'EQ',
                  value: true,
                },
              },
            },
          ],
          descendants: [],
        },
      ],
    },
  ],
}))();

import React from 'react';
import { Container, Typography, Paper, List, ListItem, ListItemText } from '@mui/material';

const trigonometricFormulas = [
  {
    name: '基本关系公式',
    formulas: [
      'sin²α + cos²α = 1',
      'tanα = sinα / cosα',
      'cotα = cosα / sinα',
      '1 + tan²α = sec²α',
      '1 + cot²α = csc²α'
    ]
  },
  {
    name: '诱导公式',
    formulas: [
      'sin(2kπ + α) = sinα',
      'cos(2kπ + α) = cosα',
      'tan(2kπ + α) = tanα',
      'sin(π + α) = -sinα',
      'cos(π + α) = -cosα',
      'tan(π + α) = tanα',
      'sin(-α) = -sinα',
      'cos(-α) = cosα',
      'tan(-α) = -tanα'
    ]
  },
  {
    name: '两角和与差公式',
    formulas: [
      'sin(α + β) = sinαcosβ + cosαsinβ',
      'sin(α - β) = sinαcosβ - cosαsinβ',
      'cos(α + β) = cosαcosβ - sinαsinβ',
      'cos(α - β) = cosαcosβ + sinαsinβ',
      'tan(α + β) = (tanα + tanβ) / (1 - tanαtanβ)',
      'tan(α - β) = (tanα - tanβ) / (1 + tanαtanβ)'
    ]
  },
  {
    name: '二倍角公式',
    formulas: [
      'sin2α = 2sinαcosα',
      'cos2α = cos²α - sin²α = 2cos²α - 1 = 1 - 2sin²α',
      'tan2α = 2tanα / (1 - tan²α)'
    ]
  },
  {
    name: '半角公式',
    formulas: [
      'sin²(α/2) = (1 - cosα) / 2',
      'cos²(α/2) = (1 + cosα) / 2',
      'tan(α/2) = (1 - cosα) / sinα = sinα / (1 + cosα)'
    ]
  },
  {
    name: '积化和差公式',
    formulas: [
      'sinαcosβ = [sin(α + β) + sin(α - β)] / 2',
      'cosαsinβ = [sin(α + β) - sin(α - β)] / 2',
      'cosαcosβ = [cos(α + β) + cos(α - β)] / 2',
      'sinαsinβ = -[cos(α + β) - cos(α - β)] / 2'
    ]
  },
  {
    name: '和差化积公式',
    formulas: [
      'sinα + sinβ = 2sin[(α + β) / 2]cos[(α - β) / 2]',
      'sinα - sinβ = 2cos[(α + β) / 2]sin[(α - β) / 2]',
      'cosα + cosβ = 2cos[(α + β) / 2]cos[(α - β) / 2]',
      'cosα - cosβ = -2sin[(α + β) / 2]sin[(α - β) / 2]'
    ]
  }
];

function App() {
  return (
    <Container maxWidth="lg">
      <Typography variant="h4" align="center" gutterBottom>
        常见数学三角公式
      </Typography>
      {trigonometricFormulas.map((category, index) => (
        <Paper key={index} elevation={3} style={{ marginBottom: '20px' }}>
          <Typography variant="h6" style={{ padding: '10px' }}>
            {category.name}
          </Typography>
          <List>
            {category.formulas.map((formula, formulaIndex) => (
              <ListItem key={formulaIndex}>
                <ListItemText primary={formula} />
              </ListItem>
            ))}
          </List>
        </Paper>
      ))}
    </Container>
  );
}

export default App;
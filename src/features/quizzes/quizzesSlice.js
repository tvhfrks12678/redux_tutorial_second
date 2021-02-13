import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  {
    id: '1',
    correct_answer_id: ['2', '5'],
    rhyme: 'ういあえ',
    answer: [
      'サッカMCは',
      'ベンチ',
      '十二番手',
      '俺は',
      '司令塔',
      '軍師官兵衛',
    ],
  },
  {
    id: '2',
    correct_answer_id: ['1', '3', '5', '7'],
    rhyme: 'おおいあうあ',
    answer: [
      'お前が',
      '大蛇丸か',
      '首切ります',
      '桃地再不斬',
      '頭冷やせ',
      '氷枕',
      '俺は',
      '物見櫓',
      'から見下ろす',
    ],
  },
]

const quizzesSlice = createSlice({
  name: 'quizzes',
  initialState,
  reducers: {},
})

export default quizzesSlice.reducer

text = "hello world"
print(text)

import pandas as pd

from pytrends.request import TrendReq
# pytrend = TrendReq(hl='en-US', tz=360)

pytrend = TrendReq()

kw_list = ['Sony mirrorless', 'Canon mirrorless', 'Nikon mirrorless']
pytrend.build_pyload(kw_list)

df = pytrend.get_historical_interest(kw_list, year_start=2016, month_start=2, day_start=1, hour_start=0, \
year_end=2016, month_end=4, day_end=1, hour_end=0, \
cat=0, geo='', gprop='', sleep=30)

df.head(10)

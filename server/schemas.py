from pydantic import BaseModel


class URLBase(BaseModel):
    target_url: str     # real url entered by the user


class URL(URLBase):
    is_active: bool     # allows to deactivate shortened url
    clicks: int         # to count the no. of times a shortened url is visited

    class Config:
        orm_mode = True


class URLInfo(URL):
    url: str
    admin_url: str
